  
    function checkDuplicatesWithinK(arr, n, k)
    {
        // Creates an empty hashset
        let myset = [];
         
        // Traverse the input array
        for(let i=0;i<n;i++)
        {
            // If already present n hash, then we found
            // a duplicate within k distance
            if(arr.includes(arr[i]))
            {
                return true;
            }
            // Add this item to hashset
            myset.add(arr[i]);
             
            // Remove the k+1 distant item
            if (i >= k)
            {
                index = array.indexOf(arr[i - k]);
                array.splice(index, 1);
            }
        }
        return false;
    }
    // Driver method to test above method
    let arr = [10, 5, 3, 4, 3, 5, 6];
    let n= arr.length;
    if (checkDuplicatesWithinK(arr, n, 3))
    {
        document.write("Yes");
    }
    else
    {
        document.write("No");
    }