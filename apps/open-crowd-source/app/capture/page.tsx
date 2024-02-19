import { GraphCapture } from "@gym-notes/components/screen-capture/graph-capture";
import { RoutineCapture } from "@gym-notes/components/screen-capture/routine-capture";
import { TrackingCapture } from "@gym-notes/components/screen-capture/tracking-capture";

export default function Page() {
  return (
    <div>
      <RoutineCapture />
      <TrackingCapture />
      <GraphCapture />
    </div>
  );
}
