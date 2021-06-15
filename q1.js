var n, i, j, k, max, ans, min, ans2;

max = 0;
j = 1;
ans = 0;
min = 999;
ans2 = 0;

const arr = [1,1,2,2,4,4,4,4,5];
// [2,2,2,2,4,4,4,4,5] [1,2,2,4,4,4,4,5]

n = arr.length;
i = 0;

while (j <= 5 )
    {
        k = 0;
        i = 0;
        while (i < n)
        {
            if (arr[i] == j)
                k++;
            i++;
        }
        if (k > max)
        {
            ans = j;
            max = k;
        }
        if (k < min && k != 0)
        {
            ans2 = j;
            min = k;
        }
    j++;
}

console.log([ans, ans2]);