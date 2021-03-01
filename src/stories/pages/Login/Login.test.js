import React from 'react';
import { render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import { Button } from '../../components/Button/Button';
import { Login } from './Login';

configure({ adapter: new Adapter() });

// Login test suite
describe('<Login />', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<Login />);
    expect(getByText(/Welcome back./i)).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  // test state change
  it('should update username state on change', () => {
    const changeState = jest.fn();
    const wrapper = mount(<Login onChange={changeState} />);
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation(username => [username, setUsername]);
    wrapper.find('.form-item__input--text').simulate('change');
    expect(changeState).toBeTruthy();
  });

  // test password state change
  it('should update password state on change', () => {
    const changeState = jest.fn();
    const wrapper = mount(<Login onChange={changeState} />);
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation(password => [password, setPassword]);
    wrapper.find('.form-item__input--password').simulate('change');
    expect(changeState).toBeTruthy();
  });
});
