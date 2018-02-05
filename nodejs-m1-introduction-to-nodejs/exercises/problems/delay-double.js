function delayDouble(input, delay, callback) {
  /* 
  double the value of input after a delay of seconds passed in parameter "delay". 
  Calculated result must be passed back via callback.
  
  Callback should be node standard error first callback;

  Conditions:
  
  if input is string type then return result as self concatenated with | character
  i.e, input = 'hello' then result is 'hello|hello'

  if input is number type then return result double value
  i.e, input = 10 then result is 20

  if input is boolean type then return result as self concatenated with # character
  i.e, input = false then result is false#false

  any other input type send error for callback 'invalid input type'
  
  example invocation: delayDouble('zeo',2000,cb);
  example output: zeo|zeo

  test cases:
  
  1.
  
  input : 23
  output : 46

  2.

  input : true
  output : true|true

  3.

  input : JS
  output : JS|JS

  4. 
  
  input : {name:'photon'}
  output : 'invalid input type'

   */
}
