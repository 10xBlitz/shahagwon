import { useState } from "react";
import SquareTabs from "../common/SquareTabs";
import Table from "../common/Table";
import { phoneManagementTableConfig } from "@/etc/table_config";
import Input from "../common/Input";

const locationTabs = [
  { label: "전체", value: "all" },
  { label: "강남점", value: "gangnam" },
  { label: "강남2호점", value: "gangnam_2" },
  { label: "대치점", value: "daechi" },
  { label: "대치3층", value: "daechi_3f" },
  { label: "대치6층", value: "daechi_6f" },
  { label: "송파점", value: "songpa" },
  { label: "대구점", value: "daegu" },
  { label: "심윤주", value: "sim_yunju" },
  { label: "최수아", value: "choi_sua" },
  { label: "김보경", value: "kim_bokyeong" },
  { label: "유도훈", value: "yu_dohun" },
  { label: "이은정", value: "lee_eunjeong" },
  { label: "박지영", value: "park_jiyoung" },
];

const communicationTypeTabs = [
  { label: "전체", value: "all" },
  { label: "문자", value: "text_message" },
  { label: "통화", value: "call" },
];

export default function PhoneManagement() {
  const [selectedLocationTab, setSelectedLocationTab] = useState(
    locationTabs[0].value,
  );
  const [selectedCommunicationTypeTab, setSelectedCommunicationTypeTab] =
    useState(communicationTypeTabs[0].value);

  return (
    <div className="mt-[20px] flex w-full max-w-[1700px] flex-col">
      <div className="mb-[22px] flex w-full flex-row justify-between">
        <div className="flex flex-row items-center gap-[32px]">
          <SquareTabs
            tabs={locationTabs}
            selectedTab={selectedLocationTab}
            onClick={(tab) => {
              setSelectedLocationTab(tab);
            }}
          />
          <Input placeholder="상대방 검색" />
        </div>
        <SquareTabs
          tabs={communicationTypeTabs}
          selectedTab={selectedCommunicationTypeTab}
          onClick={(tab) => {
            setSelectedCommunicationTypeTab(tab);
          }}
        />
      </div>
      <Table columns={phoneManagementTableConfig} hideFooter height={600} />
      <p className="mt-[16px] self-end text-sm text-[#808080]">
        * 표 클릭하면 상세보기 가능
      </p>
    </div>
  );
}
