import { render, screen, fireEvent, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ListProducts from '../components/ListProducts';
import { useProducts } from '../hooks/useProducts';
//import ProductView from './ProductView';

// Mock the useFetchProducts hook
jest.mock('../hooks/useProducts');

// Mock the axios library
jest.mock('axios');

//Mock useNavigate hook from react-router-dom
// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

window.alert = jest.fn();

describe('ListProducts Component', () => {
  //const mockNavigate = useNavigate();

  const mockProducts = [
    { id: 1, name: 'Product 1', description: 'Desc 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Desc 2', price: 200 },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  // it('should display loading state initially', () => {
  //   (useProducts as jest.Mock).mockReturnValue({
  //     products: [],
  //     setProducts: jest.fn(),
  //   });

  //   render(<ListProducts />);

  //   expect(screen.getByText('Products')).toBeInTheDocument();
  // });

//   it('should toggle visibility of the test message', () => {
//     (useProducts as jest.Mock).mockReturnValue({
//       products: mockProducts,
//       setProducts: jest.fn(),
     
//     });

//     render(<ListProducts />);

//     const toggleButton = screen.getByText('Hide/Show');

//     // Initially, the message should not be visible
//     expect(screen.queryByText('Page to demonstarte component optimization')).toBeNull();

//     // Click to show the message
//     fireEvent.click(toggleButton);
//     expect(screen.getByText('Page to demonstarte component optimization')).toBeInTheDocument();

//     // Click again to hide the message
//     fireEvent.click(toggleButton);
//     expect(screen.queryByText('Page to demonstarte component optimization')).toBeNull();
//   });
// });

  // it('should render products and total price', () => {
  //   (useProducts as jest.Mock).mockReturnValue({
  //     products: mockProducts,
  //     setProducts: jest.fn(),
      
  //   });

  //   render(<ListProducts />);

  //   // Check if the products are rendered
  //   mockProducts.forEach((product) => {
  //     expect(screen.getByText(product.name)).toBeInTheDocument();
  //     expect(screen.getByText(`Price: ${product.price}`)).toBeInTheDocument();
  //   });

  //   // Check total price calculation
  //   expect(screen.getByText('Total Price: 300')).toBeInTheDocument();
  // });

  // it('should delete a product when delete button is clicked', async () => {
  //   const setProductsMock = jest.fn();
    
  //   // Mock the products and setProducts function
  //   (useProducts as jest.Mock).mockReturnValue({
  //     products: mockProducts,
  //     setProducts: setProductsMock,
     
  //   });
  
  //   // Mock axios.delete to resolve successfully
  //   (axios.delete as jest.Mock).mockResolvedValueOnce({});
  
  //   render(<ListProducts />);
  
  //   // Click the delete button for the first product
  //   const deleteButton = screen.getAllByText('Delete')[0];
  //   fireEvent.click(deleteButton);
  
  //   // Wait for the axios.delete call to resolve and the alert to be triggered
  //   await waitFor(() => {
  //     expect(axios.delete).toHaveBeenCalledTimes(1);
  //     expect(axios.delete).toHaveBeenCalledWith("http://localhost:9000/secure_products/1");
  //     expect(axios.delete).toHaveBeenCalled();
  //   });
  
  //   // Check if setProducts is called to update the product list after deletion
  //   await waitFor(() => {
  //     expect(setProductsMock).toHaveBeenCalledWith(
  //       mockProducts.filter(product => product.id !== 1) // Ensure the product with id 1 is removed
  //     );
  //   });
  //  });
  

  // it('should navigate to edit product page when edit button is clicked', () => {
  //   (useProducts as jest.Mock).mockReturnValue({
  //     products: mockProducts,
  //     setProducts: jest.fn(),
     
  //   });

  //   render(<ListProducts />);

  //   const editButton = screen.getAllByText('Edit')[0]; // Click the edit button for the first product
  //   fireEvent.click(editButton);

  //   // Ensure navigation is called with the correct product ID
    
  //   expect(mockNavigate).toHaveBeenCalledWith('/products/1');
  // });

