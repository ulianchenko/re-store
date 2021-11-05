import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages/";
import ShopHeader from "../shop-header";
import "./app.css"

const App = () => {
  //   const twoSumAr = (nums, total) => {

  //     // let res = [];
  //     for (let i=0; i<nums.length-1; i++) {
  //       for (let j=i+1; j<nums.length; j++) {
  //         if((nums[i]+nums[j])===total) {
  //           // res.push(nums[i], nums[j])
  //           return [nums[i], nums[j]];
  //         };
  //       };
  //     };
  //   };

  //   // console.log(twoSumAr([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20));
  // const bigArr = []
  // const len = 100000;
  // for (let i=0; i<len; i++) {
  //   bigArr.push(i);
  // }
  // console.log(bigArr)
  // // const bigArr = new Array(len).fill(1);
  // bigArr[len - 2] = 9;
  // bigArr[len - 1] = 10;
  // const total = 19;

  // const twoSumCycle = (nums, total) => {
  //   let iterations = 0;
  //   const startTime = new Date();
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       iterations++;
  //       if (nums[i] + nums[j] === total) {
  //         console.log(
  //           `Iterations: ${iterations}`,
  //           `Time: ${new Date() - startTime}ms`
  //         );
  //         return [nums[i], nums[j]];
  //       }
  //     }
  //   }
  // };

  // // twoSum(bigArr, total);

  // const twoSum = (nums, total) => {

  //   let iterations = 0;
  //   const startTime = new Date();
  //   // Keep track of previous array values
  //   const previousValues = {};

  //   for (let i = 0; i < nums.length; i++) {
  //     iterations++;
  //     // What previous value needs to exist for
  //     // us to have found our solution?
  //     const complement = total - nums[i];

  //     if (previousValues[complement]) {
  //       console.log(
  //         `Iterations: ${iterations}, Time: ${new Date() - startTime}ms`
  //       );
  //       // console.log(previousValues);
  //       return [complement, nums[i]];
  //     }

  //     // This current array item now becomes
  //     // a previous value
  //     previousValues[nums[i]] = true;
  //     // console.log(previousValues);
  //   }
  // };

  // // console.log(twoSum([1, 2, 3], 4)); // [1, 3]
  // // console.log(twoSum([3, 9, 12, 20, 43, 72, 34, 19], 43)); // [9, 12]

  // // twoSum(bigArr, total);
  // console.log(twoSum(bigArr, total));

  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;