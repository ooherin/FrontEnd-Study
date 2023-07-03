{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "id" | "title">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadat2(id: string): VideoMetadata {
    return {
      url: "https://aa",
      data: "data",
    };
  }
}

{
  type Employee = {
    id: number;
    name: string;
    department: string;
    comeInYear: number;
    position: string;
  };

  type EmployeeMeta = Pick<Employee, "name" | "department" | "position">;

  const rin: EmployeeMeta = {
    name: "rin",
    department: "digital",
    position: "frontend developer",
  };

  const jin: EmployeeMeta = {
    name: "jin",
    department: "home appliance",
    position: "designer",
  };
}
