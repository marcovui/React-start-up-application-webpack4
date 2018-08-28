import sinon from 'sinon';
import chai from 'chai';
var assert = chai.assert;
import myFunction from './example';

// https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

// TO BE USED TO VERIFY A CALLBACK

// The primary use for spies is to gather information about function calls. 
// You can also use them to help verify things, such as whether a function was called or not.
describe('spy', function () {
    it('should return arguments as an array', function () {
        var spy = sinon.spy();

        //We can call a spy like a function
        spy('Hello', 'World');

        //Now we can get information about the call
        expect(spy.firstCall.args).to.eql(['Hello', 'World']); //output: ['Hello', 'World']
    });
});
// A more common pattern: Replacing another function with a spy
describe('spy', function () {
    it('should call the function', function () {
        var user = {
            setName: function(name){
              this.name = name;
            }
          }
          
          //Create a spy for the setName function
          var setNameSpy = sinon.spy(user, 'setName');
          
          //Now, any time we call the function, the spy logs information about it
          user.setName('Darth Vader');
          
          //Which we can see by looking at the spy object
          expect(setNameSpy.callCount).equal(1); //output: 1
          
          //Important final step - remove the spy
          setNameSpy.restore();
    });
});

describe('myFunction', function () {
    it('should call the callback function', function () {
        var callback = sinon.spy();

        myFunction(true, callback);

        assert(callback.calledOnce);
    });
});