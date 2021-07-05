import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, List, ListItem } from "@chakra-ui/layout";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const DropdownMenuVehicule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <List>
        <ListItem
          display="flex"
          justifyContent="space-between"
          width="100%"
          onClick={() => setIsOpen(!isOpen)}
          px="3"
          py="3"
          cursor="pointer"
          _hover={{ backgroundColor: "#FBFAFC", animation: "all .3s" }}
          borderRadius="md"
        >
          Vehicule <ArrowDownIcon />
        </ListItem>
        {isOpen && (
          <>
            <ListItem
              paddingLeft="6"
              py="2"
              borderRadius="md"
              _hover={{ backgroundColor: "#FBFAFC", animation: "all .3s" }}
              style={{
                backgroundColor: router.pathname.includes("housing")
                  ? "#FBFAFC"
                  : "none",
              }}
            >
              <Link href="/vehicule/car">
                <a>Liste des Vehicules</a>
              </Link>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );
};

export default DropdownMenuVehicule;
