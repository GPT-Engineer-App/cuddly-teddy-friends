import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"} py={12} bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack boxShadow={"2xl"} bg={useColorModeValue("white", "gray.700")} rounded={"xl"} p={10} spacing={8} align={"center"}>
          <Image src="https://images.unsplash.com/photo-1508076092314-77ad4b6b360a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXJ8ZW58MHx8fHwxNzEzMjI2MTY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Teddy Bear" boxSize="200px" objectFit="cover" rounded={"full"} />
          <Stack align={"center"} spacing={2}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              The Terrible Teddies
            </Heading>
            <Text fontSize={"lg"} color={"gray.500"}>
              A collection of terrible teddy bears
            </Text>
          </Stack>
          <Stack spacing={4} direction={"row"}>
            <Button px={6} colorScheme={"blue"} _hover={{ bg: "blue.500" }} leftIcon={<FaGithub />} as={"a"} href={"https://github.com/baphometsblade/the_terrible_teddies"} target={"_blank"}>
              View on GitHub
            </Button>
          </Stack>
          <Text fontSize={"sm"} color={"gray.500"} textAlign={"center"}>
            &copy; {new Date().getFullYear()} The Terrible Teddies. All rights reserved.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
