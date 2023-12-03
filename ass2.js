function matchFinder(string1, string2) {

    if (typeof (string1) == typeof (string2)) 
        {
            if (string1.includes(string2)) 
            {
                return true;

            }
            else {
                return false;
            }
        }
    
    else {
        return "Invalid string input";
    }
}
