import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CaptureForm from '../index'
import React from 'react'
 
describe('CaptureForm', () => {
    it('renders a form', () => {
        const {container} = render(<CaptureForm />)
     
        const form = container.querySelector('form')
     
        expect(form).toBeInTheDocument()
      })
})