//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        let brr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            brr[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();
        
        let ans = obj.check(arr, brr, n)
        console.log(ans?1:0);
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @returns {boolean}
*/
class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
        A.sort((a,b)=>a-b);
        B.sort((a,b)=>a-b);
        for(let i=0;i<N;i++){
            if(A[i]!=B[i]){
                return 0;
            }
        }
        return 1;
    }
    
}
