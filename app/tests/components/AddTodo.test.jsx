var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todo text', () => {
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $element = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid todoText', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $element = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
