{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
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
