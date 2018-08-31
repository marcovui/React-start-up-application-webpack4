import $ from "jquery";
import sinon from 'sinon';
import chai from 'chai';
import { saveUser } from './example';

// const assert = chai.assert;
// https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

// REPLACING AJAX OR OTHER EXTERNAL CALLS WHICH MAKE TESTS SLOW AND DIFFICULT TO WRITE

// TRIGGERING DIFFERENT CODE PATHS DEPENDING ON FUNCTION OUTPUT

// TESTING UNUSUAL CONDITIONS, FOR EXAMPLE WHAT HAPPENS WHEN AN EXCEPTION IS THROWN?

var stub = sinon.stub();

stub('hello');

console.log(stub.firstCall.args); //output: ['hello']


// ****************

// FIND THE PROBLEMATIC FUNCTION, SUCH AS $.POST

// LOOK AT HOW IT WORKS SO YOU CAN MIMIC IT IN THE TEST

// CREATE A STUB

// SET THE STUB TO HAVE THE BEHAVIOR YOU WANT IN YOUR TEST

describe('saveUser', function () {
    it('should call callback after saving', function () {

        //We'll stub $.post so a request is not sent
        var post = sinon.stub($, 'post');
        post.yields();

        //We can use a spy as the callback so it's easy to verify
        var callback = sinon.spy();

        saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);

        post.restore();
        sinon.assert.calledOnce(callback);
    });
});

// ***************************************

// ANOTHER COMMON USAGE FOR STUBS IS VERIFYING A FUNCTION WAS CALLED WITH A SPECIFIC SET OF ARGUMENTS.

describe('saveUser', function() {
    it('should send correct parameters to the expected URL', function() {
  
      //We'll stub $.post same as before
      var post = sinon.stub($, 'post');
  
      //We'll set up some variables to contain the expected results
      var expectedUrl = '/users';
      var expectedParams = {
        first: 'Expected first name',
        last: 'Expected last name'
      };
  
      //We can also set up the user we'll save based on the expected data
      var user = {
        firstname: expectedParams.first,
        lastname: expectedParams.last
      }
  
      saveUser(user, function(){} );
      post.restore();
  
      sinon.assert.calledWith(post, expectedUrl, expectedParams);
    });
  });