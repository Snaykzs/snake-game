describe ("generateBoard", function() {
  it("should return a board object", function() {
    expect(new Board()).toBeDefined();
  });

  it("should return board with specified size when created", function() {
    var board = new Board(40);
    expect(board.size).toEqual(40);
  });

  /* describe("Board", function() {

    it("can activate cells", function() {
      var board = new Board(40);
      var test = board.activateCell(0,2);
      // var activeCell = $('.main-board:nth-child(3)')
      var activeCell = test;

      expect(activeCell).toHaveClass('active')
      // expect("$('.main-board #r_0-c_2').hasClass('active')");
      // console.log($('div .main-board #r_0-c_2').hasClass('active'))
    });
    });*/
  //   it("should increase the height of the tree by 10 inches", function() {
  //     var tree=new Tree();
  //     tree.grow();
  //     expect(tree.height).toEqual(10);
  //   });
  //   it("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
  //     var tree=new Tree();
  //     while (tree.age < FRUIT_BEARING_AGE) {
  //       tree.grow();
  //     }
  //     expect(tree.orangeCount).toBeGreaterThan(0);
  //   });
  //   it("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
  //     var tree=new Tree();
  //     while (tree.age < (FRUIT_BEARING_AGE-1)) {
  //       tree.grow();
  //     }
  //     expect(tree.orangeCount).toEqual(0);
  //   });
  // });

//   describe ("die",function() {
//     it("should be alive when age <= MAX_AGE",function() {
//       var tree=new Tree();
//       while (tree.age < (MAX_AGE-1)) {
//         tree.grow();
//       }
//       tree.grow();
//       expect(tree.isAlive).toEqual(true);
//     });
//     it("should die when age > MAX_AGE",function() {
//       var tree=new Tree();
//       while (tree.age < MAX_AGE) {
//         tree.grow();
//       }
//       tree.grow();
//       expect(tree.isAlive).toEqual(false);
//     });
//   });

//   describe("dropOrange", function() {
//     it("should return the orange that is removed from oranges", function() {
//       var tree=new Tree();
//       while (tree.age< FRUIT_BEARING_AGE) {
//         tree.grow();
//       }
//       expect(tree.dropOrange()).toBeDefined();
//     });
//   });

//   describe ("pickOrange", function() {
//     it("should return a orange object", function() {
//       expect(pickOrange()).toBeDefined();
//     });
//     it("should return an orange with a random diameter > 0", function() {
//       var orange = pickOrange();
//       expect(orange.diameter).toBeGreaterThan(0);
//     });
//   });

});
