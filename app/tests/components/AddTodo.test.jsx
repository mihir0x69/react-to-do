var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should call handleAddTodo prop with invalid data', () => {
    var todoText = 'Check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
    var $element = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('Should not call handleAddTodo prop with invalid data', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
    var $element = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
