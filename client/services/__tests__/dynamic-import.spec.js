import { shallow } from 'enzyme';
import React from 'react';
import { dynamicImport } from '../dynamic-import';

describe('Testing the dynamicImport function', () => {
  const Decoy = () => <div id="decoy">decoy</div>;

  it('should render the Decoy component', done => {
    const mockImport = () => Promise.resolve({ default: Decoy });
    const Component = dynamicImport(mockImport, {})();
    const wrapper = shallow(Component);
    setTimeout(() => {
      wrapper.update();
      const containsDecoy = wrapper.containsMatchingElement(<Decoy />);
      expect(containsDecoy).toBe(true);
      done();
    }, 10);
  });
});
