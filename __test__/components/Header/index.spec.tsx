import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from "@/components/Header";

describe('<Header />', () => {
    it('should be render an image with alternative text sapphire logo', () => {
        render(<Header />)

        const img = screen.getByRole('img', { name: 'sapphire logo' })
        expect(img).toBeInTheDocument()
    })

    it('should be render a h1 in page with text', () => {
        render(<Header title="Conteúdo bruto entregue para você de mandeira totalmente lapidada" />)

        const title = screen.getByRole('heading', { name: 'Conteúdo bruto entregue para você de mandeira totalmente lapidada' })
        expect(title).toBeInTheDocument()
    })

    it('should render list in page whith list item', () => {
        render(<Header />)

        const list = screen.getByRole('list')
        expect(list).toContainHTML('li')
    })

    it('should be the text "Mini-cursos" in the link', () => {
        render(<Header />)
        const arr = ['Mini-cursos', 'Front-end', 'Back-end']

        for(let i = 0; i < 3; i++) {
            const link = screen.getByRole('link', { name: arr[i] })
            expect(link).toBeInTheDocument()
        }
    })
})