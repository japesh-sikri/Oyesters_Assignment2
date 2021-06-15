var str = "12:01:00AM";

function print24(str)
{
    var h1 = Number(str[1] - '0');
    var h2 = Number(str[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
    var m1 = Number(str[4] - '0');
    var m2 = Number(str[3] - '0');
    var mm = (m2 * 10 + m1 % 10);
    var s1 = Number(str[7] - '0');
    var s2 = Number(str[6] - '0');
    var ss = (s2 * 10 + s1 % 10);

    if (ss < 15) {
        ss += 45;
    } else {
        ss -= 15;
        if (mm == 59) {
            if (hh == 11) {
                hh += 1;
                if (str[8] == 'A') {
                    str = str.replace('A', 'P');
                } else {
                    str = str.replace('P', 'A');
                }
            } else if (hh == 12) {
                hh = 1;
            } else {
                hh += 1;
            }
        } else {
            mm += 1;
        }
    }

    if (mm < 15) {
        mm += 45;
    } else {
        mm -= 15;
        if (hh == 11) {
            hh += 1;
            if (str[8] == 'A') {
                str = str.replace('A', 'P');
            } else {
                str = str.replace('P', 'A');
            }
        } else if (hh == 12) {
            hh = 1;
        } else {
            hh += 1;
        }
    }

    if (mm < 10) {
        mm = `0${mm}`;
    } else {
        mm = `${mm}`;
    }

    if (ss < 10) {
        ss = `0${ss}`;
    } else {
        ss = `${ss}`;
    }

    var hh1;

    if (hh < 10) {
        hh1 = `0${hh}`;
    } else {
        hh1 = `${hh}`;
    }

    str = `${hh1}:${mm}:${ss}${str[8]}${str[9]}`
    var str1 = '';

    // AM
    if (str[8] == 'A')
    {
        if (hh == 12)
        {
            str1 = str1.concat("00");
            for (var i = 2; i <= 7; i++)
                str1 = str1.concat(str[i]);
        }
        else
        {
            for (var i = 0; i <= 7; i++)
                str1 = str1.concat(str[i]);
        }
    }
  
    // PM
    else
    {
        if (hh == 12)
        {
            str1 = str1.concat("12");
            for (var i = 2; i <= 7; i++)
                str1 = str1.concat(str[i]);
        }
        else
        {
            hh = hh + 12;
            str1 = str1.concat(hh);
            for (var i = 2; i <= 7; i++)
                str1 = str1.concat(str[i]);
        }
    }

    return str1;
}

console.log(print24(str));