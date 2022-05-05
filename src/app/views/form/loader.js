import { Spinner } from '@blueprintjs/core';

const loadingSentences = [
  'Calcul du prix du ticket',
  "Réglage de l'horodateur",
  'Chargement des voiturettes',
  'Gonflage des pneus',
  "Écriture de la plaque d'immatriculation",
  'Hector préfère faire la fête que coder',
  'Have you got crêpes in your besace ?',
  'Marvelous... also nice',
];

function Loader() {
  const sentence =
    loadingSentences[Math.floor(Math.random() * loadingSentences.length)];

  return (
    <div className="loader">
      <Spinner intent="primary" size={100}></Spinner>
      <p className="info">{sentence}...</p>
    </div>
  );
}

export default Loader;
