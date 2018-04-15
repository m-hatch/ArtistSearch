/* 
 * Function for truncating a string
 * arguments: string, number
 */
export default (s, n) => {

  // if string is less than number, return string
  if (s.length <= n)
    return s; 

  // truncate string at last space and add ellipsis
  const subString = s.substr(0, n-1);
  return subString.substr(0, subString.lastIndexOf(' ')) + '...';
  
};