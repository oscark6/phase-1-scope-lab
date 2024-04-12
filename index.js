// Write your solution in this file!

var customerName = 'bob';
console.log(customerName); // Output: 'bob'

// Declare the customerName variable in the global scope using the window object
window.customerName = 'bob';

// Define the upperCaseCustomerName function
function upperCaseCustomerName() {
  // Modify the customerName variable to uppercase
  window.customerName = window.customerName.toUpperCase();
}

// Run the tests
describe('upperCaseCustomerName()', function() {
  it('modifies the customerName variable', function() {
    expect(window.customerName).to.equal('bob');

    upperCaseCustomerName();

    expect(window.customerName).to.equal('BOB');
  });
});

// Declare the bestCustomer variable in the global scope using the window object
window.bestCustomer = undefined;

// Define the setBestCustomer function
function setBestCustomer() {
  // Set the value of the bestCustomer variable to 'not bob'
  window.bestCustomer = 'not bob';
}

// Run the tests
describe('setBestCustomer()', function() {
  it('sets the bestCustomer variable', function() {
    expect(window.bestCustomer).to.equal(undefined);

    setBestCustomer();

    expect(window.bestCustomer).to.equal('not bob');
  });
});

window.bestCustomer = undefined;

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

overwriteBestCustomer('maybe bob');
expect(window.bestCustomer).to.equal('maybe bob');


 
