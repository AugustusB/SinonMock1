QUnit.module( "Mocking example" );

QUnit.test("When attack successful defender should have 5 damage.", function(assert){
    // SUT
    var combat = new Combat();
    // Arrange 
    var defender = new Character();
    var mockDefender = sinon.mock(defender);
    var expectation = mockDefender.expects("takeDamage")
        .once()
        .withArgs(5);

    var attacker = sinon.stub(new Character());
    attacker.damage = 5;
    attacker.calculateHit.returns(true);

    // Act 
    combat.attack(attacker, defender);

    // Mock Assert 
    mockDefender.verify();
    assert.ok(true, "takeDamage called with passed in arguement of value 5.");

});

QUnit.module( "Spy example",{
    before: function() {
        // prepare something once for all tests
    },
    beforeEach: function() {
        // prepare something before each test
    },
    afterEach: function() {
        // clean up after each test
    },
    after: function() {
        // clean up once after all tests are done
    }
});

QUnit.test("Creating a Sinon spy.", function(assert){
    // Arrange
    var spy = sinon.spy();
    // Act
    mySUTSpy1.callCallback(spy);
    // Assert
    sinon.assert.called(spy);
    assert.ok(true, "The spy was called once." );

});
   

QUnit.test('should call a real implementation if given a real function to spy on', function(assert) {
    // Arrange
    var spy = sinon.spy(realCallback);
    // Act
    var returnValue = mySUTSpy1.callCallbackWithReturnValue(spy);
    // Assert
    assert.strictEqual(spy.called, true, "the spy was called once");
    assert.strictEqual(returnValue, 4 ,"Spy called the real implementation of realCallback returned 4");
});

QUnit.test('should spy on a method of an object', function(assert) {
    // Arrange
    var spy = sinon.spy(myDep, 'someMethod');
    // Act 
    var returnValue = mySUTSpy1.callDependencyBetter(myDep);
    // Assert
    assert.strictEqual(spy.called, true, "the spy was called once");
    assert.strictEqual(returnValue, 10 ,"Spy called the real implementation of realCallback returned 10");
});

QUnit.module( "Stub example",{
    before: function() {
        // prepare something once for all tests
    },
    beforeEach: function() {
        // prepare something before each test
    },
    afterEach: function() {
        // clean up after each test
    },
    after: function() {
        // clean up once after all tests are done
    }
});

QUnit.test("combat attack should damage the defender if the hit is successful", function(assert) {
    // Arrange 
    var combat = new Combat();
    var defender = sinon.stub(new Character());
    var attacker = sinon.stub(new Character());
    attacker.damage = 5;
    attacker.calculateHit.returns(true);
    
    // Act
    combat.attack(attacker, defender);
    
    // Assert
    sinon.assert.called(defender.takeDamage);
    assert.ok(true, "defender.takeDamage was called.");
    assert.strictEqual( true, defender.takeDamage.getCall(0).calledWith(5), "defender.takeDamage was called once with arguement of value 5.");
    // assert.ok(true, "defender.takeDamage was called once with arguement of value 5.");
  
});


QUnit.module('Asynchronous Tests');


QUnit.test('asynchronous timing test', function(assert) {

    assert.expect( 2 );

    var done1 = assert.async();
    var done2 = assert.async();
    setTimeout(function() {
      assert.ok( true, "test resumed from async operation 1" );
      done1();
    }, 500 );
    setTimeout(function() {
      assert.ok( true, "test resumed from async operation 2" );
      done2();
    }, 150);
});

QUnit.test('fadeout asynchronous timing test', function(assert) {
    // Arrange
    assert.expect( 1 );

    var done = assert.async( 1 );

    // Act and Assert
    mySUT2.fadeOutDiv(500, function() {
        assert.ok(!$("#div1").is(":visible"), "div1 is not visible - faded out!");
        done();
    });
});

QUnit.module('Error Tests');

QUnit.test('hidden exception', function(assert) {
    assert.throws(
        mySUT2.doSomething,
        function( err ) {
            return err.toString() === "my exceptions";
        },
        "raised error instance satisfies the callback function, error message is 'my exceptions'"
    );
});