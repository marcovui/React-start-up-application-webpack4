/// <binding BeforeBuild='build' ProjectOpened='default' />
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import eslint from "gulp-eslint";
import mergeStream from "merge-stream";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import wpk from "webpack";
import named from "vinyl-named";
import imagemin from "gulp-imagemin";
import install from "gulp-install";
import flatten from "gulp-flatten";
import jest from "gulp-jest";
import rename from "gulp-rename";
import clean from "gulp-clean";

// File paths object
const pathTo = {
  src: {
    sass: "Assets/css/scss/**/*.scss",
    scss: "Assets/css/scss/*.scss",
    jsx: "React/**/*.jsx",
    reactComponents: [
      "React/Components",
      "React/Redux",
        "React/Apps",
        "React/Common",
    ],
    react: "React/Apps/**/*.js",
    es6: ["Assets/scripts/es6"],
    es5: "Assets/scripts/es5/**/*.js",
    js: "Assets/scripts/es6/**/*.js",
    images: "Assets/visuals/{images,svgs}/*.{png,jpg,svg}",
  },
  dest: {
    css: "Assets/css/",
    react: "Assets/scripts/dist/app/",
    images: "Assets/visuals/dist/",
    es5: "Assets/scripts/es5/",
    js: "Assets/scripts/dist/",
    },
    publish: "C:/Builds/Business Health Checker"
};

// Check for package updates
gulp.task("NPM:UpdatePackages", () =>
    gulp.src(['./package.json'])
        .pipe(install())
);

// AFTER PUBLISH ########################
// Put our front-end files into the build
gulp.task('publish:assets', () =>
    gulp.src(['Assets/**/*'])
        .pipe(gulp.dest(pathTo.publish + '/Assets'))
);
gulp.task('publish:rename_config', ['publish:assets'], () =>
    gulp.src([pathTo.publish + "/**/*.config"])
        .pipe(rename(function (path) {
            // path.dirname = path.dirname;
            path.basename = path.basename + "_dev";
            // path.extname = ".config"
        }))
        .pipe(gulp.dest(pathTo.publish))
);
gulp.task('_PUBLISH', ['publish:rename_config'], () =>
    gulp.src([pathTo.publish + "/**/*.config", "!/**/*_dev.config"], { read: false })
        .pipe(clean({ force: true }))
);
// END AFTER PUBLISH ########################

// Compile SASS - Dev & Production
gulp.task("sass:development", () =>
  gulp.src(pathTo.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: "expanded",
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pathTo.dest.css))
);

gulp.task("sass:production", () =>
  gulp.src(pathTo.src.scss)
    .pipe(sass({
      outputStyle: "compressed",
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
    }))
    .pipe(gulp.dest(pathTo.dest.css))
);

// Lint JSX Code
gulp.task("lint:jsx", () =>
  gulp.src(pathTo.src.jsx)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// Transpile JSX
gulp.task("transpile:react", ["lint:jsx"], () => {
  const streams = pathTo.src.reactComponents.map(path =>
    gulp.src(`${path}/**/*.jsx`)
      .pipe(babel({
        presets: ["react", "es2015", "airbnb", "stage-0"],
      }))
      .pipe(gulp.dest(path))
  );
  return mergeStream(streams);
});

// Compile JSX - Dev & Production
function reactCompiler(config) {
  return gulp.src(pathTo.src.react)
    .pipe(named())
    .pipe(webpack(require(config), wpk)) // eslint-disable-line
    .pipe(gulp.dest(pathTo.dest.react));
}

gulp.task("compile:react:development", ["transpile:react"], () =>
  reactCompiler("./webpack.config.development.js")
);

gulp.task("compile:react:production", ["transpile:react"], () => {
  reactCompiler("./webpack.config.production.js");
});

gulp.task("transpile:es6", ["lint:jsx"], () => {
  const streams = pathTo.src.es6.map(path =>
    gulp.src(`${path}/**/*.js`)
      .pipe(babel({
        presets: ["react", "es2015", "airbnb", "stage-0"],
      }))
      .pipe(gulp.dest(pathTo.dest.es5))
  );
  return mergeStream(streams);
});

// Compile ES6 to ES5
function jsCompiler(config) {
  return gulp.src(pathTo.src.es5)
    .pipe(named())
    .pipe(webpack(require(config), wpk)) // eslint-disable-line
    .pipe(gulp.dest(pathTo.dest.js));
}

gulp.task("compile:es6:development", ["transpile:es6"], () =>
  jsCompiler("./webpack.config.development.js")
);

gulp.task("compile:es6:production", ["transpile:es6"], () => {
  jsCompiler("./webpack.config.production.js");
});

// Optimise Images
gulp.task("optimise:images", () =>
  gulp.src(pathTo.src.images)
    .pipe(flatten())
    .pipe(imagemin([
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
    ]))
    .pipe(gulp.dest(pathTo.dest.images))
);

// Watch for file changes
gulp.task("watch", () => {
  gulp.watch(pathTo.src.sass, ["sass:development"]);
  gulp.watch(pathTo.src.jsx, ["compile:react:development"]);
  gulp.watch(pathTo.src.images, ["optimise:images"]);
  gulp.watch(pathTo.src.js, ["compile:es6:development"]);
});

// Build Task
gulp.task("build", ["sass:production", "compile:react:production", "compile:es6:production", "optimise:images"]);

// Default Task
gulp.task("default", ["sass:development", "compile:react:development", "compile:es6:development", "optimise:images", "watch"]);