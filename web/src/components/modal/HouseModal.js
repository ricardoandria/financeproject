import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Spacer, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";

import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import { useQuery } from "react-query";
import { BASE_URL } from "../../utils/constants";
import LayoutModal from "./Modal";
import { Cookies } from "react-cookie";
import { Skeleton } from "@chakra-ui/skeleton";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Button } from "@chakra-ui/button";
import useSave from "../../hooks/useSave";
import { Switch } from "@chakra-ui/switch";
import { useToast } from "@chakra-ui/toast";
import useCreate from "../../hooks/useCreate";

const cookies = new Cookies();

const HouseModal = ({ isOpen, onClose, isUpdate, currentItem }) => {
  const toast = useToast();
  const { data, isError, isLoading } = useQuery("fokotany", async () => {
    const res = await fetch(`${BASE_URL}/fokotany/fetch`, {
      headers: {
        "x-auth-token": cookies.get("jwt"),
      },
    });
    return res.json();
  });
  const initialState = {
    typeBatiment: "",
    ministere: "",
    typeLogement: "",
    localisation: "",
    categorie: "",
    adresse: "",
    nomHotel: "",
    fokotany: "",
    enceinteLieuTravail: false,
    titreCISJ: "",
    titreNomPropiete: "",
    titreNumTitre: "",
    titreSurface: "",
    titreNomProprietaire: "",
    titreAffectation: false,
    titreCin: "",
    titreCoordonneGPSX: "",
    titreCoordonneGPSY: "",
    infoTechLogDateSaisie: "",
    infoTechLogSurfaceBatieLong: "",
    infoTechLogSurfaceBatieLarg: "",
    infoTechLogCloture: "",
    infoTechLogPortailPrincipal: "",
    infoTechLogCour: "",
    infoTechLogParking: "",
    infoTechLogJardin: "",
    infoTechLogAnneDeConstruction: "",
    infoTechLogTypesMateriauxConstruction: "",
    infoTechLogTypeDeToiture: "",
  };
  const houseMutation = useCreate(`logement/create`, "batiment");
  const updateHouseMutation = useSave("logement/update", "batiment");
  const onSave = (values) => {
    if (isUpdate) {
      updateHouseMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          toast({
            title: "Bâtiment",
            description: "Crée avec succès",
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
      });
    } else {
      houseMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          toast({
            title: "Bâtiment",
            description: "Crée avec succès",
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
      });
    }
  };
  return (
    <LayoutModal
      size="2xl"
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={
        isUpdate ? "Mise à jour bâtiment" : "Ajouter nouveau bâtiment"
      }
    >
      <Flex w="100%" flexDirection="column">
        <Formik
          initialValues={isUpdate ? currentItem : initialState}
          onSubmit={onSave}
        >
          {({ values, handleChange }) => (
            <Form>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Quel type de bâtiment voulez-vous enregistrer
                  </FormLabel>
                  <Select
                    name="typeBatiment"
                    value={values.typeBatiment}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="logement">Logement</option>
                    <option value="bureau">Bureau</option>
                    <option value="bureau de logement">
                      Bureau de logement
                    </option>
                    <option value="hotel ministeriel">Hotel ministeriel</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Ministère/Instutition
                  </FormLabel>
                  <Select
                    name="ministere"
                    value={values.ministere}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="ministere de l'economie et des finances">
                      Ministère de l'economie et des finances
                    </option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex mt="4" style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Catégorie de logement
                  </FormLabel>
                  <Select
                    name="categorie"
                    value={values.categorie}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="villa">Villa</option>
                    <option value="logement independant">
                      Logement Indépendant
                    </option>
                    <option value="appartement">Appartement</option>
                    <option value="cite">Cité</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Dans l'enceinte d'un lieu de travail
                  </FormLabel>
                  <Switch
                    size="lg"
                    name="enceinteLieuTravail"
                    onChange={handleChange}
                    value={values.enceinteLieuTravail}
                  />
                </FormControl>
              </Flex>
              <Flex mt="4" style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Type de logement</FormLabel>
                  <Select
                    value={values.typeLogement}
                    onChange={handleChange}
                    placeholder="choisir"
                    name="typeLogement"
                  >
                    <option value="type social">Type social</option>
                    <option value="logement de fonction">
                      Logement de fonction
                    </option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Localisation</FormLabel>
                  <Select
                    name="localisation"
                    value={values.localisation}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="antananarivo">Antananarivo</option>
                  </Select>
                </FormControl>
              </Flex>
              <Flex mt="4" style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Adresse</FormLabel>
                  <Input
                    name="adresse"
                    value={values.adresse}
                    onChange={handleChange}
                    placeholder="ex: Lot 18 II A"
                    required="Ce champ est requis"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Nom hotel</FormLabel>
                  <Input
                    name="nomHotel"
                    value={values.nomHotel}
                    onChange={handleChange}
                    placeholder="Nom de l'hotel"
                    required="Ce champ est requis"
                  />
                </FormControl>
              </Flex>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">Fokotany</FormLabel>
                <Select
                  name="fokotany"
                  value={values.fokotany}
                  onChange={handleChange}
                  placeholder="choisir"
                  required="Veuillez choisir.."
                >
                  {Array.isArray(data) &&
                    data.length > 0 &&
                    data.map((d) => (
                      <option key={d._id} value={d._id}>
                        {d.nom}
                      </option>
                    ))}
                  {isLoading && (
                    <option>
                      <Skeleton />
                    </option>
                  )}
                  {isError && (
                    <option>
                      <Heading fontSize="1rem" color="red.400">
                        Quelques choses a mal tourné, veuillez rechargez votre
                        navigateur
                      </Heading>
                    </option>
                  )}
                </Select>
              </FormControl>
              <Spacer height="6" />
              <Stack direction="column">
                <Heading as="h5" fontSize="1.2rem">
                  Information Fonciere
                </Heading>
                <Divider colorScheme="gray" variant="solid" />
              </Stack>
              <Spacer height="6" />
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">
                  DISPONIBILITÉ CERTIFICAT D’IMMATRICULATION ET DE SITUATION
                  JURIDIQUE (CISJ)
                </FormLabel>
                <Input
                  value={values.titreCISJ}
                  onChange={handleChange}
                  name="titreCISJ"
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">NOM DU PROPRIETE</FormLabel>
                <Input
                  value={values.titreNomPropiete}
                  onChange={handleChange}
                  name="titreNomPropiete"
                />
              </FormControl>
              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl>
                  <FormLabel fontSize="0.85rem">Numero du titre</FormLabel>
                  <Input
                    value={values.titreNumTitre}
                    onChange={handleChange}
                    name="titreNumTitre"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Surface(CONTENANCE)</FormLabel>
                  <Input
                    value={values.titreSurface}
                    onChange={handleChange}
                    name="titreSurface"
                  />
                </FormControl>
              </Flex>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">NOM DU PROPRIETAIRE</FormLabel>
                <Input
                  value={values.titreNomProprietaire}
                  onChange={handleChange}
                  name="titreNomProprietaire"
                />
              </FormControl>
              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl>
                  <FormLabel fontSize="0.85rem">AFFECTATION</FormLabel>
                  <Switch
                    size="lg"
                    name="titreAffectation"
                    onChange={handleChange}
                    value={values.titreAffectation}
                  />
                </FormControl>
                <FormControl width="300px" ml="200px">
                  <FormLabel fontSize="0.85rem">SCAN CIN</FormLabel>
                  <Input
                    value={values.titreCin}
                    onChange={handleChange}
                    name="titreCin"
                  />
                </FormControl>
              </Flex>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">COORDONNÉES GPS X</FormLabel>
                <Input
                  value={values.titreCoordonneGPSX}
                  onChange={handleChange}
                  name="titreCoordonneGPSX"
                />
              </FormControl>
              <FormControl mt="4">
                <FormLabel fontSize="0.85rem">COORDONNÉES GPS Y</FormLabel>
                <Input
                  value={values.titreCoordonneGPSY}
                  onChange={handleChange}
                  name="titreCoordonneGPSY"
                />
              </FormControl>
              <Spacer height="6" />
              <Stack direction="column">
                <Heading as="h5" fontSize="1.2rem">
                  Information Technique
                </Heading>
                <Divider colorScheme="gray" variant="solid" />
              </Stack>
              <Spacer height="6" />

              <FormControl>
                <FormLabel fontSize="0.85rem">Date de Saisie</FormLabel>
                <Input
                  type="date"
                  value={values.infoTechLogDateSaisie}
                  onChange={handleChange}
                  name="infoTechLogDateSaisie"
                />
              </FormControl>
              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl mt="4">
                  <FormLabel fontSize="0.85rem">
                    Longueur Surface batie
                  </FormLabel>
                  <Input
                    value={values.infoTechLogSurfaceBatieLong}
                    onChange={handleChange}
                    name="infoTechLogSurfaceBatieLong"
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize="0.85rem">
                    Largeur Surface batie
                  </FormLabel>
                  <Input
                    value={values.infoTechLogSurfaceBatieLarg}
                    onChange={handleChange}
                    name="infoTechLogSurfaceBatieLarg"
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize="0.85rem">Cloture</FormLabel>
                <Select
                  placeholder="choisir"
                  value={values.infoTechLogCloture}
                  onChange={handleChange}
                  name="infoTechLogCloture"
                >
                  <option value="Dur">Dur</option>
                  <option value="Bois">Bois</option>
                  <option value="Plantes">Plantes</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="0.85rem">Portail Principale</FormLabel>
                <Select
                  placeholder="choisir"
                  value={values.infoTechLogPortailPrincipal}
                  onChange={handleChange}
                  name="infoTechLogPortailPrincipal"
                >
                  <option value="metallique">metallique</option>
                  <option value="Bois">Bois</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="0.85rem">Cour</FormLabel>
                <Select
                  placeholder="choisir"
                  value={values.infoTechLogCour}
                  onChange={handleChange}
                  name="infoTechLogCour"
                >
                  <option value="terreBatue">terre batue</option>
                  <option value="asphalte">Asphalte</option>
                  <option value="pave">pave</option>
                  <option value="goudron">goudron</option>
                </Select>
              </FormControl>
              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl mt="4">
                  <FormLabel fontSize="0.85rem">
                    Nombre de voiture sur parking
                  </FormLabel>
                  <Input
                    value={values.infoTechLogParking}
                    onChange={handleChange}
                    name="infoTechLogParking"
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel fontSize="0.85rem">Surface de Jardin</FormLabel>
                  <Input
                    value={values.infoTechLogJardin}
                    onChange={handleChange}
                    name="infoTechLogJardin"
                  />
                </FormControl>
              </Flex>
              <Flex style={{ gap: "6px" }} marginTop="4">
                <FormControl>
                  <FormLabel fontSize="0.85rem">Date de Contruction</FormLabel>
                  <Input
                    type="date"
                    value={values.infoTechLogAnneDeConstruction}
                    onChange={handleChange}
                    name="infoTechLogAnneDeConstruction"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Type Materiaux de Contruction
                  </FormLabel>
                  <Select
                    placeholder="choisir"
                    value={values.infoTechLogTypesMateriauxConstruction}
                    onChange={handleChange}
                    name="infoTechLogTypesMateriauxConstruction"
                  >
                    <option value="brique">brique</option>
                    <option value="parpaing">Parpaing</option>
                    <option value="bois">bois</option>
                    <option value="tole">tole</option>
                  </Select>
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize="0.85rem">Type Toiture</FormLabel>
                <Select
                  placeholder="choisir"
                  value={values.infoTechLogTypeDeToiture}
                  onChange={handleChange}
                  name="infoTechLogTypeDeToiture"
                >
                  <option value="tuile">tuile</option>
                  <option value="ondule">ondule</option>
                  <option value="dalle">dalle</option>
                  <option value="ferme en bois">ferme en bois</option>
                </Select>
              </FormControl>

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

export default HouseModal;
