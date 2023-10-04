import React from 'react'
import { Heading, Text } from "@chakra-ui/react";
import { InputForm } from "../components/InputForm";
export default function Homepage() {
  return (
    <>
          <Heading as="h3" size="xl" m={ '3% 0% 2% 0%' }>
        URL Shortener
          </Heading>
          <InputForm />
          <Text m={ '3%' }>Created by ( <a target="_blank" href="https://inspiring-buttercream-79429a.netlify.app/"> Subramanian Anand</a>)</Text>
    </>
  )
}