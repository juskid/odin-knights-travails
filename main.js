/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function Node (position, prev ) {\n    if (position[0] > 0 && position [0] < 8 && position[1] > 0 && position[1] < 8 ) {\n        return {position, prev};\n    } else {\n        return null;\n    }\n}\n\nconsole.log(isSubset([2,2], [[1,1], [2,2], [3,3]]));\n\nfunction isSubset(arr1, arr2) {\n    return !arr2.every(val => {\n        for (let i = 0; i < arr1.length; i++) {\n            if (arr1[i] !== val[i]) {\n                return true;\n            }\n        } return false;\n    });\n}\n\n//node\n//if pheasible\n//return node\n//else return null\n\nfunction knightsMove(initialArray, desiredArray) {\n    let currentNode = new Node(initialArray, [initialArray]);\n    const queue = new Array();\n    queue.push(currentNode);\n    do {\n        currentNode = queue.shift();\n        let knightMoves = getKnightMoves(currentNode.position[0], currentNode.position[1]);\n        knightMoves.forEach((newMove) => {\n            let newNode = Node(newMove, currentNode.prev.concat([newMove]));\n            if (newNode) {\n                queue.push(newNode);\n            }\n        });\n    } while ((currentNode.position[0] !== desiredArray[0]) || (currentNode.position[1] !== desiredArray[1]) && (queue.length > 0));\n    if (queue.length === 0) {\n        console.log('not found');\n    } else {\n        console.log('Desired Position: ' + desiredArray);\n        console.log('Steps: ' + currentNode.prev);\n        console.log('Current Position: ' + currentNode.position);\n        console.log(queue.length);\n    }\n}\n\nfunction getKnightMoves(x, y) {\n    return [\n        [x+1, y+2],\n        [x+1, y-2],\n        [x-1, y+2],\n        [x-1, y-2],\n        [x+2, y+1],\n        [x+2, y-1],\n        [x-2, y+1],\n        [x-2, y-1]    \n    ];\n}\n\nknightsMove([1,1], [6,6]);\n\n//func knights move(array, array)\n//create current node\n//create queue\n//append current node to queue\n//append non-valid node to queue\n//while (not at location && queue)\n    //call getknightmoves\n    //getknightmoves.foreach((position) => {\n    //  new node = Node(position, currentnode.concat(currentnode.prev))      \n    //  if (node)\n    //      queue.append(node)\n    //})\n    //currentnode = queue.shift()\n\n\n//if (queue.length === 0) {log stupid}\n//else { log prev, it took prev.length-1 steps}\n\n//func getKnightMoves(x, y)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0EsMkJBQTJCO0FBQzNCLFNBQVM7O0FBRVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTm9kZSAocG9zaXRpb24sIHByZXYgKSB7XG4gICAgaWYgKHBvc2l0aW9uWzBdID4gMCAmJiBwb3NpdGlvbiBbMF0gPCA4ICYmIHBvc2l0aW9uWzFdID4gMCAmJiBwb3NpdGlvblsxXSA8IDggKSB7XG4gICAgICAgIHJldHVybiB7cG9zaXRpb24sIHByZXZ9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coaXNTdWJzZXQoWzIsMl0sIFtbMSwxXSwgWzIsMl0sIFszLDNdXSkpO1xuXG5mdW5jdGlvbiBpc1N1YnNldChhcnIxLCBhcnIyKSB7XG4gICAgcmV0dXJuICFhcnIyLmV2ZXJ5KHZhbCA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycjFbaV0gIT09IHZhbFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cblxuLy9ub2RlXG4vL2lmIHBoZWFzaWJsZVxuLy9yZXR1cm4gbm9kZVxuLy9lbHNlIHJldHVybiBudWxsXG5cbmZ1bmN0aW9uIGtuaWdodHNNb3ZlKGluaXRpYWxBcnJheSwgZGVzaXJlZEFycmF5KSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gbmV3IE5vZGUoaW5pdGlhbEFycmF5LCBbaW5pdGlhbEFycmF5XSk7XG4gICAgY29uc3QgcXVldWUgPSBuZXcgQXJyYXkoKTtcbiAgICBxdWV1ZS5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICBkbyB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgbGV0IGtuaWdodE1vdmVzID0gZ2V0S25pZ2h0TW92ZXMoY3VycmVudE5vZGUucG9zaXRpb25bMF0sIGN1cnJlbnROb2RlLnBvc2l0aW9uWzFdKTtcbiAgICAgICAga25pZ2h0TW92ZXMuZm9yRWFjaCgobmV3TW92ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld05vZGUgPSBOb2RlKG5ld01vdmUsIGN1cnJlbnROb2RlLnByZXYuY29uY2F0KFtuZXdNb3ZlXSkpO1xuICAgICAgICAgICAgaWYgKG5ld05vZGUpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld05vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IHdoaWxlICgoY3VycmVudE5vZGUucG9zaXRpb25bMF0gIT09IGRlc2lyZWRBcnJheVswXSkgfHwgKGN1cnJlbnROb2RlLnBvc2l0aW9uWzFdICE9PSBkZXNpcmVkQXJyYXlbMV0pICYmIChxdWV1ZS5sZW5ndGggPiAwKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IGZvdW5kJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rlc2lyZWQgUG9zaXRpb246ICcgKyBkZXNpcmVkQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZygnU3RlcHM6ICcgKyBjdXJyZW50Tm9kZS5wcmV2KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgUG9zaXRpb246ICcgKyBjdXJyZW50Tm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXVlLmxlbmd0aCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRLbmlnaHRNb3Zlcyh4LCB5KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgW3grMSwgeSsyXSxcbiAgICAgICAgW3grMSwgeS0yXSxcbiAgICAgICAgW3gtMSwgeSsyXSxcbiAgICAgICAgW3gtMSwgeS0yXSxcbiAgICAgICAgW3grMiwgeSsxXSxcbiAgICAgICAgW3grMiwgeS0xXSxcbiAgICAgICAgW3gtMiwgeSsxXSxcbiAgICAgICAgW3gtMiwgeS0xXSAgICBcbiAgICBdO1xufVxuXG5rbmlnaHRzTW92ZShbMSwxXSwgWzYsNl0pO1xuXG4vL2Z1bmMga25pZ2h0cyBtb3ZlKGFycmF5LCBhcnJheSlcbi8vY3JlYXRlIGN1cnJlbnQgbm9kZVxuLy9jcmVhdGUgcXVldWVcbi8vYXBwZW5kIGN1cnJlbnQgbm9kZSB0byBxdWV1ZVxuLy9hcHBlbmQgbm9uLXZhbGlkIG5vZGUgdG8gcXVldWVcbi8vd2hpbGUgKG5vdCBhdCBsb2NhdGlvbiAmJiBxdWV1ZSlcbiAgICAvL2NhbGwgZ2V0a25pZ2h0bW92ZXNcbiAgICAvL2dldGtuaWdodG1vdmVzLmZvcmVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgLy8gIG5ldyBub2RlID0gTm9kZShwb3NpdGlvbiwgY3VycmVudG5vZGUuY29uY2F0KGN1cnJlbnRub2RlLnByZXYpKSAgICAgIFxuICAgIC8vICBpZiAobm9kZSlcbiAgICAvLyAgICAgIHF1ZXVlLmFwcGVuZChub2RlKVxuICAgIC8vfSlcbiAgICAvL2N1cnJlbnRub2RlID0gcXVldWUuc2hpZnQoKVxuXG5cbi8vaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge2xvZyBzdHVwaWR9XG4vL2Vsc2UgeyBsb2cgcHJldiwgaXQgdG9vayBwcmV2Lmxlbmd0aC0xIHN0ZXBzfVxuXG4vL2Z1bmMgZ2V0S25pZ2h0TW92ZXMoeCwgeSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;