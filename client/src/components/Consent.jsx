// Consent.js

import React, { useState, useEffect } from "react";

const Consent = ({ onAgree, onDisagree }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    // Simulating fetching consent status from the backend
    const fetchConsentStatus = async () => {
      // Replace this with your actual logic to fetch consent status from the backend
      const consentStatus = false; // For demonstration purposes, assuming user hasn't agreed
      setAgreed(consentStatus);
    };

    fetchConsentStatus();
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // Check if the user is close to the bottom of the scrollable area
    const isCloseToBottom = scrollTop + clientHeight >= scrollHeight - 10;
    setScrollPosition(scrollTop);

    if (isCloseToBottom) {
      setAgreed(true);
    } else {
      setAgreed(false);
    }
  };

  const handleAgree = () => {
    // Handle logic when user agrees
    setAgreed(true);
    // You can perform additional actions here, such as saving the user's consent state.
    onAgree();
  };

  const handleDisagree = () => {
    // Handle logic when user disagrees
    // You might want to redirect the user or perform other actions here.
    onDisagree();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blur">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        {/* Scrollable consent text */}
        <div className="max-h-96 overflow-y-auto mt-4">
          <div>
            <p>
              <span style={{ fontSize: "26pt" }}>
                Consentement éclairé pour l'utilisation de l'application web de
                gestion de patients PSP BI MSH :
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                1. Objectif de l'Application :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                En utilisant PSP BI MSH, vous consentez à l'utilisation de cette
                application web dans le but spécifique de gérer les informations
                relatives aux patients, y compris mais sans s'y limiter, les
                dossiers médicaux, les rendez-vous, les prescriptions, et autres
                données pertinentes liées à la santé.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                2. Confidentialité et Sécurité :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous reconnaissez que les informations personnelles et médicales
                des patients sont hautement confidentielles. PSP BI MSH s'engage
                à mettre en place des mesures de sécurité robustes pour protéger
                ces données contre tout accès non autorisé, perte, divulgation,
                ou altération.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                3. Accès Restreint :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous acceptez de ne pas partager vos informations d'accès à
                l'application avec des tiers non autorisés. Tout accès ou
                utilisation non autorisé est strictement interdit.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                4. Responsabilités de l'Utilisateur :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous comprenez et acceptez que vous êtes entièrement responsable
                de l'exactitude, de la légalité et de la pertinence des données
                que vous saisissez dans l'application. PSP BI MSH décline toute
                responsabilité découlant de l'utilisation inappropriée ou
                frauduleuse de l'application.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                5. Mises à Jour et Modifications :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à recevoir des mises à jour régulières de
                l'application pour assurer son bon fonctionnement et bénéficier
                des dernières fonctionnalités. PSP BI MSH se réserve le droit de
                modifier les fonctionnalités de l'application, les termes et
                conditions, et toute autre information associée.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                6. Droit à la Vie Privée :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à ce que PSP BI MSH collecte, stocke et traite
                vos données conformément à sa politique de confidentialité. Vous
                avez le droit de demander l'accès à vos données personnelles et
                de demander des corrections si nécessaire.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                7. Communication :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous consentez à recevoir des communications, notifications et
                alertes de la part de PSP BI MSH liées à l'utilisation de
                l'application, y compris des informations importantes sur la
                sécurité et les mises à jour.
              </span>
            </p>
            <p>
              <br />
            </p>
            <p>
              <span style={{ color: "#666666", fontSize: "15pt" }}>
                8. Révocation du Consentement :
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11pt" }}>
                Vous avez le droit de retirer votre consentement à tout moment
                en désinstallant l'application et en cessant de l'utiliser.
                Cependant, cela peut entraîner la résiliation de votre accès à
                certaines fonctionnalités de l'application.
              </span>
            </p>
            <p>
              <br />
            </p>
            <h3></h3>
          </div>
        </div>
        <strong>
          <span style={{ color: "#434343", fontSize: "13.999999999999998pt" }}>
            En acceptant ces termes, vous confirmez avoir lu, compris et
            consentez volontairement à utiliser l'application web de gestion de
            patients PSP BI MSH conformément à ces conditions. Vous reconnaissez
            également que votre utilisation de l'application est soumise aux
            lois et réglementations en vigueur.
          </span>
        </strong>
        <div className="flex justify-between">
          <button
            onClick={handleAgree}
            disabled={!agreed}
            className={`px-4 py-2 rounded cursor-pointer ${
              !agreed ? "bg-gray-500" : "bg-green-500 text-white"
            }`}
          >
            I Agree
          </button>
          <button
            onClick={handleDisagree}
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
          >
            Don't Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
