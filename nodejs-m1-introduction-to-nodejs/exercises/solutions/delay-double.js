function delayDouble(input, delayInSecs, callback) {
  let delayBy = delayInSecs * 1000;
  setTimeout(function () {
    let result;
    if (typeof input === 'number')
      result = input * 2;
    else if (typeof input === 'string')
      result = input + ' | ' + input;
    else if (typeof input === 'boolean')
      result = input + ' | ' + input;
    else
      throw new Error('invalid input type');
    callback(result);
  }, delayBy)
}

delayDouble(true, 2, function (result) {
  console.log(result);
});
