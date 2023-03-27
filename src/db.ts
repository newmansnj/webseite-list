import axios from "axios";

interface IData {
  name: string;
  email: string;
  postalCode: string;
  locality: string;
  street: string;
  streetNumber: string;
}

export const sendToDatabase = async (data: IData) => {
  try {
    const response = await axios.post(
      "https://my-nosql-database.com/my-collection",
      data
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};