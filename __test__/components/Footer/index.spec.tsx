import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from "@/components/Footer";

describe('<Footer />', () => {
    it('should have alternative text "Instagram logo" in svg inside link', () => {
        render(<Footer />)

        const link = screen.getByRole('link', { name: 'Instagram logo' })
        expect(link).toBeInTheDocument()
    })

    it('should have alternative text "LinkedIn logo" in svg inside link', () => {
        render(<Footer />)

        const link = screen.getByRole('link', { name: 'LinkedIn logo' })
        expect(link).toBeInTheDocument()
    })

    it('should have the text "Sapphire - 2023"', () => {
        render(<Footer />)

        const text = screen.getByText('Sapphire - 2023')
        expect(text).toBeInTheDocument()
    })

    it('should have the text "Image by Sketchepedia" inside link', () => {
        render(<Footer />)

        const text = screen.getByRole('link', { name: 'Image by Sketchepedia' })
        expect(text).toBeInTheDocument()
    })
})