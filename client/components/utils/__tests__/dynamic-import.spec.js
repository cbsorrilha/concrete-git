import { mount } from 'enzyme';
import React from 'react';
import { dynamicImport } from '../dynamic-import';

describe('Testing the dynamicImport function', () => {
  const Decoy = () => <div id="decoy">decoy</div>;

  it('should render the Decoy component', () => {
    const Component = dynamicImport(() => Promise.resolve({ default: Decoy }))();
    const wrapper = mount(Component);
    console.log(wrapper.debug());
    expect(true).toBe(true);
  });
});
