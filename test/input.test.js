import { mount } from '@vue/test-utils';
import { it, expect } from 'vitest';
import LoginForm from '@/components/LoginForm.vue';

it('registers a new user', async () => {
  const wrapper = mount(LoginForm);
  const emailInput = wrapper.find('.form-email');
  // wrapper.setData({ email: 'blah@blah.com' });
  emailInput.setValue('blah@blah.com');
  expect(wrapper.vm.email).toBe('blah@blah.com');
});
