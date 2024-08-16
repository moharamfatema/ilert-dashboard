import { FC, PropsWithChildren, useContext } from "react";
import { observer } from "mobx-react-lite";

import { DashboardContext } from "@/providers/DashboardConfig";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Block } from "@/types/resources";
import { SmartPointerSensor } from "@/lib/SmartPointerSensor";

const SortableProvider: FC<
  PropsWithChildren & {
    isEditMode: boolean;
  }
> = observer(({ isEditMode, children }) => {
  const dashboardConfig = useContext(DashboardContext);
  const sensors = useSensors(
    useSensor(SmartPointerSensor, {
      activationConstraint: {
        distance: 0.01,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = dashboardConfig.blocks.indexOf(
        dashboardConfig.blocks.find(
          (block: Block) => block.id === active.id,
        ) as Block,
      );
      const newIndex = dashboardConfig.blocks.indexOf(
        dashboardConfig.blocks.find(
          (block: Block) => block.id === over?.id,
        ) as Block,
      );
      const newArray = arrayMove(dashboardConfig.blocks, oldIndex, newIndex);
      dashboardConfig.setBlocks(newArray);
    }
  };
  return isEditMode ? (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={dashboardConfig.blocks}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  ) : (
    <>{children}</>
  );
});
export default SortableProvider;
