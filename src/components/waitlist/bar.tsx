import Cta from "@/components/cta";
import WaitlistButton from "@/components/waitlist/button";

const WaitlistBar = () => {
  return (
    <Cta
      title={"Join the Waitlist and ignite impact"}
      button={<WaitlistButton variant={"solid"} />}
      contain
      containerProps={{ bg: "silver" }}
    />
  );
};

export default WaitlistBar;
