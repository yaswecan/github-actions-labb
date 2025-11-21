import { render, screen } from "@testing-library/react"
import { describe, expect , test} from "vitest"
import Button from "./Button"

describe("button testing", () => {
  test("Le boutton affiche le texte 'Cliquez ici'", () => {
    render(<Button/>)
    const expectedText = screen.getByText("Cliquez Ici")
    expect(expectedText).toBeInTheDocument()
  })
})
