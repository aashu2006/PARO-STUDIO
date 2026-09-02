import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import CommunityGuidelines from "./CommunityGuidelines";

vi.mock("@/hooks/useAuth", () => ({
  useAuth: () => ({
    user: null,
    profile: null,
    loading: false,
    signOut: vi.fn(),
  }),
}));

vi.mock("@/components/theme/ThemeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">ThemeToggle</div>,
}));

describe("CommunityGuidelines Page", () => {
  it("renders page title, guidelines sections, and feedback button", () => {
    render(
      <MemoryRouter>
        <CommunityGuidelines />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1, name: /community guidelines/i })).toBeDefined();
    expect(screen.getByText(/respect & inclusivity/i)).toBeDefined();
    expect(screen.getByText(/originality & attribution/i)).toBeDefined();
    expect(screen.getByText(/content standards & safety/i)).toBeDefined();
    expect(screen.getByText(/quality & reproducibility/i)).toBeDefined();
    expect(screen.getByText(/reporting & enforcement/i)).toBeDefined();

    const feedbackLink = screen.getByRole("link", { name: /send feedback/i });
    expect(feedbackLink.getAttribute("href")).toBe("/feedback");
  });
});
