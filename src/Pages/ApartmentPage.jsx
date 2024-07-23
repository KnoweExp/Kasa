import "./ApartmentPage.sass";
import ApartmentDescription from "/src/components/ApartmentDescription";
import ImageBanner from "/src/components/ImageBanner";
import ApartmentHeader from "/src/components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

function ApartmentPage() {
  const Apartment = useApartment();

  if (Apartment == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment-page">
      <ImageBanner pictures={Apartment.pictures} />
      <ApartmentHeader apartment={Apartment} />
      <div className="apartment__description__area">
        <ApartmentDescription
          title="Description"
          content={Apartment.description}
        />
        <ApartmentDescription
          title="Equipements"
          content={
            <ul>
              {Apartment.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
