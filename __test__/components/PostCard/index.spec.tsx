import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PostCard } from "@/components/PostCard";

describe('<PostCard />', () => {
    it('should render a image on page', () => {
        render(<PostCard image="" title="" summary="" category="" />)

        const image = screen.getByRole('img', { name: 'Capa do post' })
        expect(image).toBeInTheDocument()
    })

    it('should have a heading with text', () => {
        render(<PostCard image="" category="" summary="" title="Titulo" />)

        const heading = screen.getByRole('heading', { name: 'Titulo' })
        expect(heading).toBeInTheDocument()
    })

    it('should have a category', () => {
        render(<PostCard image="" title="" summary="" category="category" />)

        const category = screen.getByText('category')
        expect(category).toBeInTheDocument()
    })

    it('should have a summary', () => {
        render(<PostCard image="" category="" title="" summary="summary" />)

        const summary = screen.getByText('summary')
        expect(summary).toBeInTheDocument()
    })
})