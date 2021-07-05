import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Spacer,
  Stack,
  Switch,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import useCreate from "../../hooks/useCreate";
import useSave from "../../hooks/useSave";
import LayoutModal from "./Modal";

const AssignModal = ({ isOpen, onClose, lid }) => {
  const initialState = {
    nom: "",
    prenom: "",
    matricule: "",
    fonction: "",
  };
  const toast = useToast();
  const assignMutation = useCreate("Utilisateur/create", "Utilisateur");
  const vehiculeMutation = useSave(`vehicule/${lid}/assign`, "vehicule");
  const onAssign = (values) => {
    assignMutation.mutate(values, {
      onSuccess: () => {
        vehiculeMutation.mutate(
          { isAttributed: true },
          {
            onSuccess: () => {
              onClose();
              toast({
                title: "Occupant vehicule",
                description: "attribuer avec succès",
                position: "bottom",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            },
            onError: () => {
              toast({
                title: "Erreur",
                description: "Quelque chose a mal tourné",
                position: "bottom",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            },
          }
        );
      },
      onError: () => {
        toast({
          title: "Erreur",
          description: "Quelque chose a mal tourné",
          position: "bottom",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };
  return (
    <LayoutModal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle="Attribuer un vehicule"
      size="2xl"
    >
      <Flex w="100%" flexDirection="column">
        <Formik initialValues={initialState} onSubmit={onAssign}>
          {({ values, handleChange }) => (
            <Form>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">Nom</FormLabel>
                <Input value={values.nom} onChange={handleChange} name="nom" />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="0.85rem">prenom</FormLabel>
                <Input
                  value={values.prenom}
                  onChange={handleChange}
                  name="prenom"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="0.85rem">Matricule</FormLabel>
                <Input
                  value={values.matricule}
                  onChange={handleChange}
                  name="matricule"
                />
              </FormControl>

              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl>
                  <FormLabel fontSize="0.85rem">Fonction</FormLabel>
                  <Input
                    value={values.fonction}
                    onChange={handleChange}
                    name="fonction"
                  />
                </FormControl>
              </Flex>

              <Box
                _focus="none"
                w="100%"
                display="flex"
                justifyContent="flex-end"
                mt="6"
              >
                <Button
                  type="submit"
                  backgroundColor="linkedin.400"
                  color="white"
                >
                  Sauvegarder
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </LayoutModal>
  );
};

export default AssignModal;
