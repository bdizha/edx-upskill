import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CourseList from '../index'
 
describe('CourseList', () => {
  it('renders a heading', () => {
    const { getByText } = render(<CourseList />); // Render your component

    // Use getByText to find the element by its text content
    const element = getByText('All courses');
  
    // Assert that the element exists
    expect(element).toBeInTheDocument();
  
    // You can also assert other properties or classes
    expect(element).toHaveClass('mb-4');
  })
})