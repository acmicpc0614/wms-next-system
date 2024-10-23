interface SectionForSettingProps {
  isCheckbox?: boolean; // Indicates whether the checkbox should be displayed
  title?: string; // Title of the section
  icon?: React.ReactNode; // Optional icon, can be any React node
  content?: string; // Optional content for additional information
  action?: () => void; // Optional action function for handling events
}

const SectionForSetting: React.FC<SectionForSettingProps> = ({
  isCheckbox,
  title,
  icon,
  content,
  action,
}) => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="pr-4 border-r-[1px] border-bodydark2">
          {isCheckbox && <input type="checkbox" />}
        </div>
        <div className="">
          <div className="flex flex-row gap-2">
            <h4 className="font-semibold">{title}</h4>
            {icon}
          </div>
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </>
  );
};

export default SectionForSetting;
