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
    assert.ok(true, "takeDamage called with parameter set to 5.");

});