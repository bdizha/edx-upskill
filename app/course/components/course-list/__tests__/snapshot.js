import { render } from '@testing-library/react'
import CourseList from '../index'
 
it('renders course list unchanged', () => {
  const { container } = render(<CourseList />)
  expect(container).toMatchSnapshot()
})