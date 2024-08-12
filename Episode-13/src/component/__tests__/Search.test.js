import { render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <body />
      </BrowserRouter>
    )
  );

  //   const searchButton = screen.getByRole("button",{name:"Search"});

  //   expect(searchButton).toBeInTheDocument();
});
