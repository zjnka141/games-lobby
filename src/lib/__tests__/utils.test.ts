import { generateSlug } from "../utils"

describe("generateSlug", () => {
  it("returns a slugified string", () => {
    const input = "Test String"
    const expected = "test_string"
    expect(generateSlug(input)).toBe(expected)
  })

  it("trims whitespace", () => {
    const input = " Test String "
    const expected = "test_string"
    expect(generateSlug(input)).toBe(expected)
  })

  it("lowercases the string", () => {
    const input = "TEST STRING"
    const expected = "test_string"
    expect(generateSlug(input)).toBe(expected)
  })
})
