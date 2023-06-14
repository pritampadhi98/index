import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ImageModal from "./ImageModal";

const MyTable = ({ value, brandNames }) => {
  const datas = useSelector((state) => state.contentPayLoad);
  return (
    brandNames?.length > 0 && (
      <Box sx={{ padding: "10%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "24px", lineHeight: "30px", fontWeight: "500" }}
              >
                Table Name
              </TableCell>
              {brandNames?.map((vals) => {
                return (
                  <TableCell
                    key={vals}
                    sx={{
                      fontSize: "24px",
                      lineHeight: "30px",
                      fontWeight: "500",
                    }}
                  >
                    {vals}{" "}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {value?.response?.length > 0 &&
              Object.keys(value?.response[0]).map((yrt) => {
                return Object.keys(value?.response[0][yrt]).map((vals) => {
                  return Object.keys(value?.response[0][yrt][vals]).map(
                    (subVal, index) => {
                      return subVal?.length > 2 &&
                        value?.response[0][yrt][vals][subVal]?.comment
                          ?.length >= 0 ? (
                        <TableRow key={index}>
                          <TableCell>{`${yrt}>${vals}>${subVal}`}</TableCell>

                          {brandNames?.map((v, index) => {
                            return (
                              <TableCell key={v}>
                                <Box sx={{ display: "block" }}>
                                  <Box>
                                    {
                                      value?.response[index][yrt][vals][subVal]
                                        .rating
                                    }
                                  </Box>

                                  <Box>
                                    {
                                      value?.response[index][yrt][vals][subVal]
                                        .comment
                                    }
                                  </Box>

                                  {value?.response[index][yrt][vals][subVal]
                                    .attachment?.length > 0 && (
                                    <Box>
                                      {/* <Image
                                        src={
                                          value?.response[index][yrt][vals][
                                            subVal
                                          ].attachment
                                        }
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                      /> */}
                                      <ImageModal
                                        img_link={
                                          value?.response[index][yrt][vals][
                                            subVal
                                          ].attachment
                                        }
                                      />
                                    </Box>
                                  )}
                                </Box>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ) : (
                        subVal?.length > 2 &&
                          Object.keys(
                            value?.response[0][yrt][vals][subVal]
                          ).map((finalVal, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>
                                  {`${yrt}>${vals}>${subVal}`}
                                </TableCell>

                                {brandNames?.map((v, index) => {
                                  return (
                                    <TableCell key={v}>
                                      <Box sx={{ display: "block" }}>
                                        <Box>
                                          {
                                            value?.response[index][yrt][vals][
                                              subVal
                                            ][finalVal].rating
                                          }
                                        </Box>

                                        <Box>
                                          {
                                            value?.response[index][yrt][vals][
                                              subVal
                                            ][finalVal].comment
                                          }
                                        </Box>

                                        {value?.response[index][yrt][vals][
                                          subVal
                                        ][finalVal].attachment?.length > 0 && (
                                          <Box>
                                            {/* <Image
                                              src={
                                                value?.response[index][yrt][
                                                  vals
                                                ][subVal][finalVal].attachment
                                              }
                                              width={50}
                                              height={50}
                                              alt="Picture of the author"
                                            /> */}
                                            <ImageModal
                                              img_link={
                                                value?.response[index][yrt][
                                                  vals
                                                ][subVal][finalVal].attachment
                                              }
                                            />
                                          </Box>
                                        )}
                                      </Box>
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })
                      );
                    }
                  );
                });
              })}
          </TableBody>
        </Table>
      </Box>
    )
  );
};

export default MyTable;
