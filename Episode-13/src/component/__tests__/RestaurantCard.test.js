//UNIT TESTING...

import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render Restaurant Card with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("The Belgian Waffle Co.");

  expect(name).toBeInTheDocument();
});
