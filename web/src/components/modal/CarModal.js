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

const CarModal = ({ isOpen, onClose, isUpdate, currentItem }) => {
  const toast = useToast();

  const initialState = {
    immatriculationProvisoire: "",
    immatriculationProvisoire2: "",
    attribue: "",
    marque: "",
    type: "",
    serieDuType: "",
    autresType: "",
    genre: "",
    puissanceadmin: "",
    carrosserie: "",
    numMoteur: "",
    etatVehicule: "",
    sourceEnergie: "",
    datePremiereMise: "",
    dateImmatriculationPrecedente: "",
    categorieUtilisation: "",
    nomResponsable: "",
    fonctionDetenteur: "",
    ministere: "",
    directionGenerale: "",
    provinces: "",
    region: "",
  };
  const carMutation = useCreate(`vehicule/create`, "vehicule");
  const updatecarMutation = useSave("vehicule/update", "vehicule");
  const onSave = (values) => {
    if (isUpdate) {
      updatecarMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          toast({
            title: "vehicule",
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
      carMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          toast({
            title: "vehicule",
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
        isUpdate ? "Mise à jour vehicule" : "Ajouter nouveau vehicule"
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
                    Immatriculation Provisoire
                  </FormLabel>
                  <Input
                    name="immatriculationProvisoire"
                    value={values.immatriculationProvisoire}
                    onChange={handleChange}
                    placeholder="ex: : 4 ou 5 chiffres"
                    required="Ce champ est requis"
                  />
                </FormControl>
                <FormControl mt="30px">
                  <Select
                    name="immatriculationProvisoire2"
                    value={values.immatriculationProvisoire2}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="WWT">WWT:Antananarivo</option>
                    <option value="WWA">WWA:Toamasina</option>
                    <option value="WWF">WWF:Fianarantsoa</option>
                    <option value="WWU">WWU:Tulear</option>
                  </Select>
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize="0.85rem">Attribue a:</FormLabel>
                <Input
                  name="attribue"
                  value={values.attribue}
                  onChange={handleChange}
                  placeholder="ex: Ministere"
                  required="Ce champ est requis"
                />
              </FormControl>

              <Flex mt="4" style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Marque:</FormLabel>
                  <Input
                    name="marque"
                    value={values.marque}
                    onChange={handleChange}
                    placeholder="Marque Constructeur"
                    required="Ce champ est requis"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Type:</FormLabel>
                  <Input
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    placeholder="Une partie du VIN, Alphanumérique, varie selon
                    véhicule"
                    required="Ce champ est requis"
                  />
                </FormControl>
              </Flex>
              <Flex mt="4" style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Serie du Type:</FormLabel>
                  <Input
                    name="serieDuType"
                    value={values.serieDuType}
                    onChange={handleChange}
                    placeholder="Une partie du VIN, varie selon véhicule"
                    required="Ce champ est requis"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Autres Types</FormLabel>
                  <Select
                    name="autresType"
                    value={values.autresType}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="Passat">Passat</option>
                    <option value="Pajero">Pajero</option>
                    <option value="Golf">Golf</option>
                    <option value="Megane">Megane</option>
                    <option value="Partner">Partner</option>
                  </Select>
                </FormControl>
              </Flex>

              <FormControl>
                <FormLabel fontSize="0.85rem">Genre</FormLabel>
                <Select
                  name="genre"
                  value={values.genre}
                  onChange={handleChange}
                  placeholder="choisir"
                >
                  <option value="VP">VP:Vehicule de plaisir</option>
                  <option value="TCP">
                    TCP:Véhicule de Transport en commun de personnes,{" "}
                  </option>
                  <option value="CTTE">
                    CTTE:Camionnette (inferieur ou egale de 3t5)
                  </option>
                  <option value="CAMION">CAMION: Poids lourds</option>
                  <option value="MOTO">MOTO:: Motocyclette à vitesse</option>
                </Select>
              </FormControl>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Carrosserie</FormLabel>
                  <Select
                    name="carrosserie"
                    value={values.carrosserie}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="PLATEAU">
                      PLATEAU : Camion avec ridelle
                    </option>
                    <option value="CI4P">CI4P : Véhicule légère</option>
                    <option value="BREAK">BREAK</option>
                    <option value="CAR">CAR : Transport de personne</option>
                    <option value="FOURGON">
                      FOURGON : Transport de matériaux
                    </option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Puissance administrative
                  </FormLabel>
                  <Input
                    name="puissanceadmin"
                    value={values.puissanceadmin}
                    onChange={handleChange}
                    placeholder="Nom de l'hotel"
                    required="Ce champ est requis"
                  />
                </FormControl>
              </Flex>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Source d'energie</FormLabel>
                  <Select
                    name="sourceEnergie"
                    value={values.sourceEnergie}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="ESS">ESS: Essence</option>
                    <option value="GO">GO: Gas Oil</option>
                    <option value="HYB">HYB: Hybride</option>
                    <option value="ELEC">ELEC: Electrique</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Numero moteur:</FormLabel>
                  <Input
                    name="numMoteur"
                    value={values.numMoteur}
                    onChange={handleChange}
                    placeholder="inscrit sur le bloc moteur"
                    required="Ce champ est requis"
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize="0.85rem">
                  Etat de vehicule actuel:
                </FormLabel>
                <Select
                  name="etatVehicule"
                  value={values.etatVehicule}
                  onChange={handleChange}
                  placeholder="choisir"
                >
                  <option value="M">M:En marche</option>
                  <option value="P">P:En panne</option>
                  <option value="C">
                    C : Sur cale (superieur ou egale 1an sans entretien)
                  </option>
                  <option value="E">E : Epave</option>
                </Select>
              </FormControl>

              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Date de premiere remise
                  </FormLabel>
                  <Input
                    type="date"
                    value={values.datePremiereMise}
                    onChange={handleChange}
                    name="datePremiereMise"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Date d’immatriculation précédente
                  </FormLabel>
                  <Input
                    type="date"
                    value={values.dateImmatriculationPrecedente}
                    onChange={handleChange}
                    name="dateImmatriculationPrecedente"
                  />
                </FormControl>
              </Flex>

              <Spacer height="6" />
              <Stack direction="column">
                <Heading as="h5" fontSize="1.2rem">
                  Informations sur l’utilisation du véhicule
                </Heading>
                <Divider colorScheme="gray" variant="solid" />
              </Stack>
              <Spacer height="6" />

              <FormControl>
                <FormLabel fontSize="0.85rem">
                  Categorie d'utilisation
                </FormLabel>
                <Select
                  name="categorieUtilisation"
                  value={values.categorieUtilisation}
                  onChange={handleChange}
                  placeholder="choisir"
                >
                  <option value="R">
                    R:Voiture de représentation, utilisé par le représentant de
                    l’Etat dans une localité liée au titre : Président de la
                    République, Gouverneur, Chef District, Préfet, …
                  </option>
                  <option value="F">
                    F : Voiture de Fonction, lié au fonction, Chef de Service,
                    Directeur, DG, SG, Ministre, PM
                  </option>
                  <option value="S">S : Voiture de Service</option>
                </Select>
              </FormControl>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Nom du responsable</FormLabel>
                  <Input
                    value={values.nomResponsable}
                    onChange={handleChange}
                    name="nomResponsable"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">
                    Fonction du detenteur
                  </FormLabel>
                  <Input
                    value={values.fonctionDetenteur}
                    onChange={handleChange}
                    name="fonctionDetenteur"
                  />
                </FormControl>
              </Flex>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Ministere</FormLabel>
                  <Input
                    value={values.ministere}
                    onChange={handleChange}
                    name="ministere"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Direction Generale</FormLabel>
                  <Input
                    value={values.directionGenerale}
                    onChange={handleChange}
                    name="directionGenerale"
                  />
                </FormControl>
              </Flex>
              <Flex style={{ gap: "6px" }}>
                <FormControl>
                  <FormLabel fontSize="0.85rem">Provinces(6)</FormLabel>
                  <Select
                    name="provinces"
                    value={values.provinces}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="Antanarivo">Antananarivo</option>
                    <option value="Fianarantsoa">Fianarantsoa</option>
                    <option value="Mahajanga">Mahajanga</option>
                    <option value="Antsiranana">Antsiranana</option>
                    <option value="Toamasina">Toamasina</option>
                    <option value="Toliara">Toliara</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="0.85rem">region(22)</FormLabel>
                  <Select
                    name="region"
                    value={values.region}
                    onChange={handleChange}
                    placeholder="choisir"
                  >
                    <option value="Analamanga">Analamanga</option>
                    <option value="Boeny">Boeny</option>
                    <option value="Sava">Sava</option>
                    <option value="Diana">Diana</option>
                    <option value="Vakinakaratra">Vakinakaratra</option>
                    <option value="Amoron'i mania">Amoron'i mania</option>
                  </Select>
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

export default CarModal;
