import { render } from "@testing-library/react"
import GameCard from "../GameCard"

describe("GameCard", () => {
  it("renders title, description, and image", () => {
    const { getByText, getByAltText } = render(
      <GameCard title="Game Title" description="Game description" image="/image.png" />
    )

    expect(getByText("Game Title")).toBeInTheDocument()
    expect(getByAltText("game-thumbnail")).toBeInTheDocument()
    expect(getByText("Game description")).toBeInTheDocument()
  })

  it("does not render description when not provided", () => {
    const { queryByText } = render(<GameCard title="Title" image="/image.png" />)

    expect(queryByText("Game description")).not.toBeInTheDocument()
  })

  it("renders Button component", () => {
    const { getByText } = render(<GameCard title="Title" image="/image.png" />)

    expect(getByText("Play")).toBeInTheDocument()
  })

  it("applies expected CSS classes", () => {
    const { container } = render(<GameCard title="Title" image="/image.png" />)

    expect(container.firstChild).toHaveClass("w-full h-full rounded-xl overflow-hidden group relative select-none")
  })
})
